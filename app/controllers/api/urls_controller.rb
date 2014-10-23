class Api::UrlsController < ApplicationController

  def search
    url = url_params[:urlInput]
    render :json => Url.where(url: url)
  end

  def show
    url = Url.find(params[:id])
    render :json => url
  end

  def redirect_alias
    alias_name = params[:alias_name]
    url = Url.find_by_alias(alias_name)
    if !url
      render :json => "Sorry, no match was found"
    else
      redirect_to "#redirector/#{url.id}"
    end
  end

  def create
    url = url_params[:urlInput]
    if !Url.valid_url?(url)
      render :json => {status: 200}
    end
    new_url = Url.create(
      url: url,
      alias: Url.create_alias(url)
    )
    render :json => new_url
  end

  def url_params
    params.require(:url).permit(:urlInput)
  end

end
