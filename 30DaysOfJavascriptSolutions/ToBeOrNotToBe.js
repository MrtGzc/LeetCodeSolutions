var expect = function(value) {
    return {
        toBe: function(otherValue) {
            if(otherValue === value) return true
            else throw new Error("not equals")
        },
        notToBe: function(otherValue) {
            if(value !== otherValue) return true;
            else throw new Error("equals");
        }
    }
};

