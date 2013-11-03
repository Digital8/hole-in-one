/**
 * PrizeController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 */

var prizes = [
  "Cobra Golf Clubs (Valued at $1450)",
  "Rife Putter (Valued at $200)",
  "Rife Putter (Valued at $200)",
  "Rife Putter (Valued at $200)",
  "Rife Putter (Valued at $200)",
  "Rife Putter (Valued at $200)",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "Emerald Lakes GC - Vouchers (Valued at $ )",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$20 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$10 - Cash",
  "$5 - Cash",
  "$5 - Cash"
];

module.exports = {

  index: function(req, res, next) {
    res.view({
      prizes: prizes
    });
  },

};