class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def render_json_response(type, hash)
    unless [ :success, :redirect, :error ].include?(type)
      raise "Invalid json response type: #{type}"
    end

    default_json_structure = { 
      :status => type
      }.merge(hash)

    render_options = {:json => default_json_structure}  
    render_options[:status] = 400 if type == :error
    render_options[:status] = 200 if type == :success

    render(render_options)
  end

end
