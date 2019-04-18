
#  How to Run the program. 
  > First set up the program. 
  > 1. Download the zip file and extract it.
  > 2. Access the Courses. sol file from the folder, then copy the entire code and paste it on REMIX ide.
  > 3. Remix can be found in https://remix.ethereum.org

Then, once the code is pasted on REMIX IDE follow the following steps to test the functions of the contract.

# To test setInstructor and getInstructor functions;
    >1. Click on the run tab
    >2. Set the environment to "JavaScript VM"
    >3. Click deploy button
    >4.Then copy the address next to "Account"
    >5. Then under deployed contract click on a transaction
    >6.On setInstructor function add the following variables: "[paste copied address]", [age], "[first name]", "[last name]"
    >7.And on getInstructor add the following: "[paste copied address]"
    >8.Then click transact on setInstructor
    >9.Then click on getInstructor button and wait for the result.
    

    For example: on setInsructor: "0xca35b7d915458ef540ade6068dfe2f44e8fa733c", 50, "Jon", "Snow"
                 getInstructor: "0xca35b7d915458ef540ade6068dfe2f44e8fa733c"
             
 # Result would be:
 ![image](https://github.com/Dilianny/BlockchainHW4/blob/master/HW4%20images/getInstructor.PNG)
 
 # To test countInstructor;
     >1. Follow same procedures from above, from step 3-9
     >2. The click on countInstructor
 
# Result would be: 
 ![image](https://github.com/Dilianny/BlockchainHW4/blob/master/HW4%20images/countInstructor.PNG)
 
 # To test getInstructors function;
     >1. Follow  the same steps as usual, then click on getInstructors.
     >It should return the address.

 # Example: 
 ![image](https://github.com/Dilianny/BlockchainHW4/blob/master/HW4%20images/getInstructors.PNG)
 
 





