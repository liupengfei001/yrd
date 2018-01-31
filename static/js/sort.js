function Hash(data,test){
	var shaObj = new jsSHA("SHA-1", "TEXT");
    var arr=Object.keys(data).sort();
    var str=""
    for(var i=0;i<arr.length;i++){
		str+=data[arr[i]]
    }
    str+=test.open_id
    str+=test.once
    str+=test.ts
    console.log(str)
    shaObj.update(str);
    var hash = shaObj.getHash("HEX");
    return hash
}

function Header(params,id){
	var once=Math.uuid(32, 16);
	var ts=Date.parse(new Date());
	var test={
    	open_id:id,
    	once:once,
    	ts:ts
   	}
    var data={
    	auth:Hash(params,test),
    	once:once,
    	open_id:id,
    	ts:ts
    }
    return data
}
