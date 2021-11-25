import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://15.164.229.252/community/review/";

class CommunityService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  createReview(data) {
    console.log('hidf')
    console.log(data)
    return axios.post(API_URL, data, { headers: authHeader() });
  }

  updateReview(data) {
    return axios.put(API_URL+`${data.id}`, data, { headers: authHeader() })
  }

  deleteReview(data) {
    console.log('들어는왔음', data.review_id)
    return axios.delete(API_URL+`${data.review_id}/`, { headers: authHeader() })
  }

  createComment(review,comment) {
    console.log(comment, review.review_id)
    return axios.post(API_URL+`${review.review_id}/comment`, {content:comment},{ headers: authHeader() })
  }
}

export default new CommunityService();