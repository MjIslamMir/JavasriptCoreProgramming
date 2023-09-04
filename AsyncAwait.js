//fetch(url,{option}) 
//option={method [GET,POST,PUT,PATCH,DELETE,],
//        body,
//        headers{'content-type':'application/json or other formats, charset=UTF8'}}


//GET => Performing get Operation
async function fetchGetOperation(url){
    try{
        let getData=await fetch(url);
        let jsonData=await getData.json();
        let finalData=await jsonData;
        console.log(finalData[0]);
    }
    catch(er){
        console.log(err.message);
    }
}
let url='https://jsonplaceholder.typicode.com/posts';
fetchGetOperation(url);
// {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }

async function fetchPostOperation(url){
    try{
        let putData=await fetch(url,{
            method:'POST',
            body:JSON.stringify({
                id: 100,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers:{'Content-type':'application/json;charset=UTF-8'},
        })
        let response=await putData.json();
        console.log(response);
    }
    catch(er){
        console.log(new Error("Not Reachable"));
    }

}

fetchPostOperation('https://jsonplaceholder.typicode.com/posts/1');
//PUT: UPDATING a Resource
async function fetchPutOperation(url){
    try{
        let putData=await fetch(url,{
            method:'PUT',
            body:JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers:{'Content-type':'application/json;charset=UTF-8'},
        })
        let response=await putData.json();
        console.log(response);
    }
    catch(er){
        console.log(err.message);
    }

}

fetchPutOperation('https://jsonplaceholder.typicode.com/posts/1');
//{ id: 1, title: 'foo', body: 'bar', userId: 1 }


async function fetchPatchOperation(url){
    try{
        let myData=await fetch(url,{
            method:'PATCH',
            body:JSON.stringify({
                title: 'foo',
            }),
            headers:{'Content-type':'application/json;charset=UTF-8'},
        });
        let patchData=await myData.json();
        console.log("Patched data : ",patchData);
    }
    catch(er){
        console.log(err.message);
    }

}
fetchPatchOperation('https://jsonplaceholder.typicode.com/posts/1');
// Patched data :  {
//     userId: 1,
//     id: 1,
//     title: 'foo',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }

//DELETE
async function fetchDeleteOperation(url){
    try{
        let myData=await fetch(url,{
            method:'DELETE'});
        let deletedData=await myData.json();
        console.log("Deleted Data : ",deletedData);
    }
    catch(er){
        console.log(err.message);
    }

}
fetchDeleteOperation('https://jsonplaceholder.typicode.com/posts/1');