module.exports = (io) => {
    io.on('connection', function (socket) {
        console.log('socket created');
        let previousId;
        const safeJoin = currentId => {
            socket.leave(previousId);
            socket.join(currentId);
            previousId = currentId;
          };
        socket.on('disconnect', function() {
          console.log('Got disconnect!');
       });
       socket.on('lastKnownLocation', function (data) {
                var location = JSON.stringify(data);
               redisPublisher.publish('locationUpdate', location);
         });
    });
}