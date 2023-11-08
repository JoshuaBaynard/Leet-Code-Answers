// Not the best solution, but the solution I went with
var addTwoNumbers = function (l1, l2) {
    var myNode = new ListNode(null, null);
    var ans = (reverseNum(l1) + reverseNum(l2));
    ans = ans.toString(10);
    for (var i = 0; i < ans.length; i++) {
        myNode.next = i !== 0 ? new ListNode(myNode.val, myNode.next) : null;
        myNode.val = ans[i]
    }
    return myNode;
};

var reverseNum = function (node) {
    var arr = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }

    return BigInt(arr.reverse().join(""));
}
var q1 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
var q2 = new ListNode(
    1,
    new ListNode(
      0,
      new ListNode(
        0,
        new ListNode(
          0,
          new ListNode(
            0,
            new ListNode(
              0,
              new ListNode(
                0,
                new ListNode(
                  0,
                  new ListNode(
                    0,
                    new ListNode(
                      0,
                      new ListNode(
                        0,
                        new ListNode(
                          0,
                          new ListNode(
                            0,
                            new ListNode(
                              0,
                              new ListNode(
                                0,
                                new ListNode(
                                  0,
                                  new ListNode(
                                    0,
                                    new ListNode(
                                      0,
                                      new ListNode(
                                        0,
                                        new ListNode(
                                          0,
                                          new ListNode(
                                            0,
                                            new ListNode(
                                              0,
                                              new ListNode(
                                                0,
                                                new ListNode(
                                                  0,
                                                  new ListNode(
                                                    0,
                                                    new ListNode(
                                                      0,
                                                      new ListNode(
                                                        0,
                                                        new ListNode(1, null)
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );// console.log(l1);
console.log(addTwoNumbers(q1, q2));
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}