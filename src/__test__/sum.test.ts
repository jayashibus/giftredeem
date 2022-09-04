import { describe, expect, test } from "@jest/globals";
//import { sum, findValuefromarray } from "../component/sum";

const data = [
  {
    staff_pass_id: "STAFF_H123804820G",
    team_name: "BASS",
    created_at: "1623772799000",
  },
  {
    staff_pass_id: "MANAGER_H123804820G",
    team_name: "RUST",
    created_at: "1623772799000",
  },
  {
    staff_pass_id: "BOSS_H123804820G",
    team_name: "RUST",
    created_at: "1623772799000",
  },
];
describe("sum module", () => {
  test("Find staff details", () => {
    // expect(findValuefromarray(data, "STAFF_H123804820G")).toBeTruthy();
  });
});
