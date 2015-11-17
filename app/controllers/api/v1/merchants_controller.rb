class Api::V1::MerchantsController < ApplicationController

  def index
    @merchants = Merchant.all

    respond_to do |format|
      format.json { render :json => @merchants }
    end
  end

end
