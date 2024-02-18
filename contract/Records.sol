//SPDX-License-Identifier:MIT
pragma solidity ^0.5.0;

contract Records {
    uint public recordId;
    mapping(uint => Record) records;
    struct Record {
        uint recordId;
        uint timestamp;
        string complain;
    }
    event recordAdded(uint recordId, uint timestamp, string _complain);

    function addRecord(string memory _complain) public {
        recordId++;
        records[recordId] = Record(recordId, block.timestamp, _complain);
        emit recordAdded(recordId, records[recordId].timestamp, _complain);
    }

    function getRecord() public view returns (uint) {
        return recordId;
    }
    function getComplain(uint _recordId) public view returns (string memory) {
        return records[_recordId].complain;
    }
}
