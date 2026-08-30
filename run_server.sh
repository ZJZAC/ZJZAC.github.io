#!/bin/bash
# 本地预览脚本：使用 chruby 安装的 Ruby 3.1.3（系统自带 2.6 太旧）
export PATH="$HOME/.rubies/ruby-3.1.3/bin:$PATH"
bundle exec jekyll serve --livereload
