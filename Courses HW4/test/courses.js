var Courses = artifacts.require("./Courses.sol")

contract('Courses', function(accounts) {
  it("should assert true", function(done) {
    var courses = Courses.deployed();
    assert.isTrue(true);
    done();
  });
});

contract('Courses:setInstructor', function(accounts) {
  it("should assert true", function(done) {
    var courses = Courses.deployed();
    assert.isTrue(true);
    done();
  });
});

contract('Courses:getInstructors', function(accounts) {
  it ("should return correct address", function(done) {
  	var courses = Courses.deployed();
  	courses.then(function(contract){
  		return contract.countInstructors.call();
  	}).then(function(result){
  		assert.isTrue(result == instructorAccts);
  		done();
  	})
  });
});
/*contract('Courses:getInstructors', function(accounts) {
  it("should assert true", function(done) {
    var courses = Courses.deployed();
    assert.isTrue(true);
    done();
  });
});*/

contract('Courses:getInstructor', function(accounts) {
  it("should assert true", function(done) {
    var courses = Courses.deployed();
    assert.isTrue(true);
    done();
  });
});

/*contract('Courses:countInstructors', function(accounts) {
  it ("should return correct integer", function(done) {
  	var courses = Courses.deployed();
  	courses.then(function(contract){
  		return contract.countInstructors.call();
  	}).then(function(result){
  		assert.isTrue(result == instructorAccts.length);
  		done();
  	})
  });
}); */
  
 contract('Courses:countInstructors', function(accounts) {
  it("should assert true", function(done) {
    var courses = Courses.deployed();
    assert.isTrue(true);
    done();
  });
});
