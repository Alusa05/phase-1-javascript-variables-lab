require('./helpers.js');

const fs = require('fs');
const path = require('path');

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let companyCeo/, "Expected companyCeo to be defined using let");
    });
  });

  describe('distanceFromHqInBlocks()', function () {
    it('returns a distance in blocks', function () {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
    });

    it('returns a distance in blocks', function () {
      expect(distanceFromHqInBlocks(50)).to.equal(8);
    });

    it('returns a distance in blocks when destination is below headquarters', function () {
      expect(distanceFromHqInBlocks(34)).to.equal(8);
    });
  });

  describe('distanceFromHqInFeet()', function () {
    it('returns a distance in feet', function () {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    });

    it('returns a distance in feet', function () {
      expect(distanceFromHqInFeet(50)).to.equal(2112);
    });

    it('returns a distance in feet when destination is below headquarters', function () {
      expect(distanceFromHqInFeet(34)).to.equal(2112);
    });
  });

  describe('distanceTravelledInFeet()', function () {
    it('returns the distance travelled in feet', function () {
      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    });

    it('returns the distance travelled in feet', function () {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns the distance when destination is below starting block', function () {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    });
  });

  describe('calculatesFarePrice()', function () {
    it('gives customers a free sample', function () {
      expect(calculatesFarePrice(43, 44)).to.equal(0); 
    });
  
    it('charges 2 cents per foot for distances between 400 and 2000 feet', function () {
      expect(calculatesFarePrice(34, 36)).to.equal(2.56); 
    });
  
    it('charges 25 dollars for distances over 2000 feet', function () {
      expect(calculatesFarePrice(34, 42)).to.equal(25); 
    });
  
    it('does not allow rides over 2500 feet', function () {
      expect(calculatesFarePrice(34, 55)).to.equal('cannot travel that far');
    });
  });
  describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." for NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('returns "No go." for non-NYC destinations', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });

  describe('switchOnCharmFromTip()', function () {
    it('returns "Thank you so much." for a generous tip', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('returns "Thank you." for a not-as-generous tip', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('returns "Bye." for anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
  });
});
// New tests for the additional tasks
describe('customerName', function () {
  it('is declared as a global variable with var and initialized to "bob"', function () {
    expect(customerName).to.equal('bob');
    expect(js).to.match(/var customerName/, "Expected customerName to be declared with var");
  });
});

describe('upperCaseCustomerName()', function () {
  it('changes the customerName variable to uppercase', function () {
    upperCaseCustomerName();
    expect(customerName).to.equal('BOB');
  });
});

describe('setBestCustomer()', function () {
  it('declares a global variable bestCustomer and sets it to "not bob"', function () {
    setBestCustomer();
    expect(bestCustomer).to.equal('not bob');
  });
});

describe('overwriteBestCustomer()', function () {
  it('changes the bestCustomer variable to "maybe bob"', function () {
    overwriteBestCustomer();
    expect(bestCustomer).to.equal('maybe bob');
  });
});

describe('leastFavoriteCustomer', function () {
  it('is declared as a constant and initialized to "Alice"', function () {
    expect(leastFavoriteCustomer).to.equal('Alice');
    expect(js).to.match(/const leastFavoriteCustomer/, "Expected leastFavoriteCustomer to be declared with const");
  });
});

describe('changeLeastFavoriteCustomer()', function () {
  it('throws an error when attempting to reassign leastFavoriteCustomer', function () {
    expect(() => changeLeastFavoriteCustomer()).to.throw(TypeError);
  });
});