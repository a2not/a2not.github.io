help:
  @just --list

update:
  deno task lume upgrade

serve:
  deno task serve

remove-exif:
  exiftool -all= -overwrite_original assets/*
