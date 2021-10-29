import axios from "axios";

export const ComplaintPOST = async (complaint) => {
  const req = await axios.post(
    "https://gleaming-store-282916-default-rtdb.asia-southeast1.firebasedatabase.app/complaint.json",
    { complaint }
  );
  if (!req.status === 200) {
    throw new Error("Error Occured!");
  }
  return req;
};

export const getTracking = async (trackingNumber) => {
  if (trackingNumber === '') {
    throw new Error("Invalid Tracking Number");
  }
  const req = await axios.get(
    `https://gleaming-store-282916-default-rtdb.asia-southeast1.firebasedatabase.app/tracking/${trackingNumber}.json`
  );
  if (!req.data) {
    throw new Error("Tracking Number Not Found");
  }
  return req;
};
