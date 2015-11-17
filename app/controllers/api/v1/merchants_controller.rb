class Api::V1::MerchantsController < ApplicationController
  before_filter :check_format

  def index
    @merchants = Merchant.all

    respond_to do |format|
      format.json do
        render_json_response :success, { data: @merchants }
      end
    end
  end

  private

  def check_format
    render nothing: true, status: 406 unless params[:format] == 'json' || request.headers["Accept"] =~ /json/
  end

end
