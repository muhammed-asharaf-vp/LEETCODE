var intersection = function(nums1, nums2) {
    let ris=[]
    for(let i=0;i<nums1.length;i++){
       if(nums2.includes(nums1[i])&&(!ris.includes(nums1[i]))){
        ris.push(nums1[i])
       }else{
        ris==ris
       }
    }
return ris
};