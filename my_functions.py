#Joseph Garcia

def even(nums):
    """
    This function is supposed to return the total amount of even numbers within the list,
    it does this by creating a total variable then looping through the list and seeing if
    the remainder of each number in the list of 2 is equal to 0, if it is then 1 will be
    added to the total and once the loop is completed the total is returned.
    """
    total = 0
    for i in nums:
        if i % 2 == 0:
            total += 1
    return total

nums = [3,7,2,5,5,8,9,4,1,6]
print(even(nums))
nums = [1,3,5,7,9,11,13,15,17,19]
print(even(nums))
nums = [0,1,5,10002,34,19,233,78,96,51]
print(even(nums))

def avglessthanamt(nums):
    """
    This function is supposed to decide whether the average of the list is less than the
    total amount of elements in the list, it does this by creating a total variable then
    looping through the list and adding each number together then using that total number
    to divide by the total amount of numbers to the average, then it uses an if else statement
    to see if the average is less than the total amount of elements if it is it returns
    true if not it returns false.
    """
    total = 0
    for i in nums:
        total += i
    average = total / len(nums)

    if average < len(nums):
        return True
    else:
        return False
    
nums = [3,7,2,5,5,8,9,4,1,6]
print(avglessthanamt(nums))
nums = [365,12]
print(avglessthanamt(nums))
nums = [5,5,5,5,5]
print(avglessthanamt(nums))