@echo off
title Build Nike Store Bundle
echo Compiling Nike Editorial Store bundle...
powershell -ExecutionPolicy Bypass -File "%~dp0build.ps1"
echo.
echo Build successful!
pause
