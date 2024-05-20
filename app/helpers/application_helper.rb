module ApplicationHelper
  def color_for(ticket, user)
    case ticket.status
    when "unsold" then "bg-white"
    when "held"
      ticket.user == user ? "bg-red-600" : "bg-yellow-500"
    when "purchased"
      ticket.user == user ? "bg-green-600" : "bg-yellow-500"
    end
  end
end
