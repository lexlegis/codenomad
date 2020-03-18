source "https://rubygems.org"

gem "jekyll", "~> 3.8.5"

group :jekyll_plugins do
  gem "jekyll-archives", "2.2.1"
  gem "jekyll-feed", "0.13.0"
  gem "jekyll-paginate", "1.1.0"
  gem "jekyll-seo-tag", "2.6.1"
  gem "jekyll-sitemap", "1.4.0"
  gem "github-pages", "~> 204"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
