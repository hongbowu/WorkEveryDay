var timeRequiredToBuy = function(tickets, k) {
    let ticketsToBuy = tickets[k];
    let sum = 0;
    
    while (ticketsToBuy > 0) {
        tickets = tickets.map((ticket, index) => {
            if (index === k) {
                return ticket - 1; // Decrement ticket count for person at position k
            } else {
                if (ticket > 0) {
                    sum++; // Increment sum for each ticket bought by others
                    return ticket - 1; // Decrement ticket count for other persons
                } else {
                    return 0; // Return 0 if ticket count is already 0
                }
            }
        });
        ticketsToBuy--; // Decrement tickets to buy for person at position k
    }
        return sum;
};
timeRequiredToBuy([5,1,1,1],0);