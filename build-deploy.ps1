# build-deploy.ps1

Write-Host "=== Project Build and Deploy ===" -ForegroundColor Cyan

# 1. Build project
Write-Host "`n1. Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host " Build error!" -ForegroundColor Red
    exit 1
}
Write-Host " Build completed" -ForegroundColor Green

# 2. Check if build folder exists
if (-not (Test-Path ".\build")) {
    Write-Host " Build folder not found!" -ForegroundColor Red
    exit 1
}

# 3. Clean previous build from root
Write-Host "`n2. Cleaning previous build..." -ForegroundColor Cyan

# Get list of files/folders from build to delete
$buildItems = Get-ChildItem -Path ".\build" -Name
$removedCount = 0

foreach ($item in $buildItems) {
    if (Test-Path ".\$item") {
        Remove-Item -Path ".\$item" -Recurse -Force -ErrorAction SilentlyContinue
        Write-Host "   Removed: $item" -ForegroundColor Yellow
        $removedCount++
    }
}

if ($removedCount -eq 0) {
    Write-Host "   Nothing to clean" -ForegroundColor Gray
}
Write-Host " Cleaning completed ($removedCount items)" -ForegroundColor Green

# 4. Copy new build
Write-Host "`n3. Copying new build..." -ForegroundColor Cyan
$copiedCount = 0

Get-ChildItem -Path ".\build" | ForEach-Object {
    $destination = ".\$($_.Name)"
    Copy-Item -Path $_.FullName -Destination $destination -Recurse -Force
    Write-Host "   Copied: $($_.Name)" -ForegroundColor Cyan
    $copiedCount++
}

Write-Host " Copying completed ($copiedCount items)" -ForegroundColor Green

# 5. Final verification
Write-Host "`n4. Verifying result..." -ForegroundColor Cyan
$indexExists = Test-Path ".\index.html"
$staticExists = Test-Path ".\static"

if ($indexExists -and $staticExists) {
    Write-Host " Build successfully deployed to root" -ForegroundColor Green
    Write-Host "   index.html: present" -ForegroundColor Green
    Write-Host "   static/: present" -ForegroundColor Green
} else {
    Write-Host " Something went wrong - main files are missing" -ForegroundColor Red
    exit 1
}

Write-Host "`n Ready for git push!" -ForegroundColor Green
Write-Host "   Don't forget: git add . && git commit -m 'deploy' && git push" -ForegroundColor Yellow