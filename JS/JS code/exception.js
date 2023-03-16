function myTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
       throw console.log('try catch work');
    } catch (error) {
        console.log('gotcha ' + error.message);
    }
    finally{
        console.log('This will run')
    }
    console.log('working');
}
myTryCatch();
