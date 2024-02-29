class ScheduleChannel < ApplicationCable::Channel
  def subscribed
    puts ">>>>>>>>>>>>>>>>> hello from schedule_channel.rb >>>>>>>>>>>>>>>>> subscribed"
    stream_from "schedule"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
