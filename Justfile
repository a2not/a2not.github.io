help:
  @just --list

remove-exif:
  exiftool -all= -overwrite_original ./src/content/images/*
