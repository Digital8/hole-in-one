/**
 * PrizeController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 */



var prizes = [
  "Cobra Golf Clubs (Valued at $1450)",
  "Infiniti Car for a Weekend plus 9 & Dine at ELGC",
  "Infiniti Car for a Weekend plus 9 & Dine at ELGC",
  "Rife Putter (Valued at $200)",
  "Rife Putter (Valued at $200)",
  "Rife Putter (Valued at $200)",
  "Rife Putter (Valued at $200)",
  "Rife Putter (Valued at $200)",
  "$88 ELGC Voucher (Nine & Dine for two)",
  "$88 ELGC Voucher (Nine & Dine for two)",
  "$88 ELGC Voucher (Nine & Dine for two)",
  "$88 ELGC Voucher (Nine & Dine for two)",
  "$88 ELGC Voucher (Nine & Dine for two)",
  "$88 ELGC Voucher (Nine & Dine for two)",
  "$88 ELGC Voucher (Nine & Dine for two)",
  "$88 ELGC Voucher (Nine & Dine for two)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "30min Golf Lesson (valued at $60)",
  "Box Srixon Z Balls",
  "Box Srixon Z Balls",
  "Box Srixon Z Balls",
  "Box Srixon Z Balls",
  "Box Srixon Z Balls"
];

module.exports = {

  index: function(req, res, next) {
    res.view({
      prizes: prizes
    });
  },

};