
var counter =(function (){
    let count = 0;

    function print(message){
        console.log(`${message} => ${count}`);
    }
    
        function getCount(){return count;}

        function setCount(value) {count = value}

        function incrmentCount(){
            count += 1;
            print('After Incrment: ');
        }
        
        function resetCount() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }

        return {
            get: getCount,
            set: setCount,
            incerment: incrmentCount,
            reset: resetCount
        };
    })();


counter.incerment();
counter.incerment();
counter.incerment();
counter.set(7)

console.log(counter.get());
counter.reset();