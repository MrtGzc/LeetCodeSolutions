
var twoSum = function(nums, target) {
    var array = []
    for(var x = 0; x < nums.length; x++){
        for(var y = x + 1; y < nums.length; y++){
            if(nums[x] + nums[y] == target){
                array.push(x)
                array.push(y)
            }
        }
    }
    return array
};

