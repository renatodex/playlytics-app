require 'sinatra'

set :views, Proc.new { File.join(root, "views") }

get '/' do
	erb :playlists
end

get '/playlist/:id' do
	@id = params[:id]
	erb :playlist
end
