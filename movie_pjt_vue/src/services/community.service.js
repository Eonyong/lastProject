import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://15.164.229.252/community/review/";

class CommunityService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  createReview(data) {
    return axios.post(API_URL, data, { headers: authHeader() });
  }
}

export default new CommunityService();