import { ethers } from "hardhat";
import { expect } from "chai";

describe("SimpleStorage", function () {
  it("Should store the new data", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    // Simpan data baru
    const newData = 123;
    await simpleStorage.store(newData);

    // Dapatkan data yang disimpan
    const storedData = await simpleStorage.retrieve();
    expect(storedData).to.equal(newData);
  });
});
