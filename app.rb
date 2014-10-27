require 'sinatra'
require 'sinatra/contrib'

set :views, Proc.new { File.join(root, "views") }

get '/' do
	@view = "playlists"
	erb :playlists
end

get '/playlist/:id' do
	@view = "playlist"
	@id = params[:id]
	erb :playlist
end
