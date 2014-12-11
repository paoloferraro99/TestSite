TestSite::Application.routes.draw do
  get "welcome/index"
  get "welcome/static1"
  get "welcome/static2"
  get "welcome/static3"
  get "welcome/static4"
  get "welcome/static5"
  get "welcome/static6"
  get "welcome/static7"
  get "welcome/static8"
  get "welcome/static9"
  
  root to: 'welcome#index'

end
