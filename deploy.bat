@echo off
echo ===========================
echo  Starting GitHub Deployment
echo ===========================

echo.
echo Building React App...
npm run build

echo.
echo Adding files...
git add .

echo.
echo Committing files...
git commit -m "Deploying to gh-pages"

echo.
echo Pushing to gh-pages branch...
git push origin `git subtree split --prefix build main`:gh-pages --force

echo.
echo Deployment complete!
echo Visit: https://razaansari73.github.io/web-template/#/
pause
