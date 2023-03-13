@echo off

REM Run the command responsible for writing to .trigger in the background
start /B "" cargo watch -x check -s "type nul > .trigger"

REM Now run the command responsible for recompiling when the .trigger file changes
cargo watch --no-vcs-ignores -w .trigger -x run