var spy = sinon.spy(this, 'getObjectById');

describe('getObjectById', function() {
  let TREE_DATA = {
    "items": [
      {
        "id": "1",
        "name": "johnny"
      },
      {
        "id": "2",
        "name": "ingi",
        "children": [
          {
            "id": "3",
            "name": "johnson"
          },
          {
            "id": "4",
            "name": "katy"
          },
          {
            "id": "5",
            "name": "steve",
            "children": [
              {
                "id": "6",
                "name": "lisa"
              },
              {
                "id": "7",
                "name": "penny",
                "children": [
                  {
                    "id": "8",
                    "name": "john"
                  },
                  {
                    "id": "9",
                    "name": "hoyong"
                  }
                ]
              },
              {
                "id": "10"
              }
            ]
          },
          {
            "id": "11"
          },
          {
            "id": "12"
          }
        ]
      },
      {
        "id": "13"
      },
      {
        "id": "14"
      }
    ]
  };

  beforeEach(function() {
    spy.resetHistory();
  });

  it('id와 매칭되는 객체를 리턴해야 합니다', function() {
    expect(getObjectById(TREE_DATA.items, '1')).to.deep.equal({
      "id": "1",
      "name": "johnny"
    });

    expect(spy.calledOnce).to.be.equal(true);
  });

  it('객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (1)', function() {
    expect(getObjectById(TREE_DATA.items, '4')).to.deep.equal({
      "id": "4",
      "name": "katy"
    });

    expect(spy.callCount).to.be.equal(2);
  });

  it('객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (2)', function() {
    expect(getObjectById(TREE_DATA.items, '7')).to.deep.equal({
      "id": "7",
      "name": "penny",
      "children": [
        {
          "id": "8",
          "name": "john"
        },
        {
          "id": "9",
          "name": "hoyong"
        }
      ]
    });

    expect(spy.callCount).to.be.equal(3);
  });

  it('객체가 담겨있는 깊이만큼 함수가 호출되어야 합니다 (3)', function() {
    expect(getObjectById(TREE_DATA.items, '9')).to.deep.equal({
      "id": "9",
      "name": "hoyong"
    });

    expect(spy.callCount).to.equal(4);
  });
});
