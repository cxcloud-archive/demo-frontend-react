import _ from 'lodash';
const accessToken = 'e6bdb60d3ec5313a17274fc3db04a4fe3d28b0fbe6b0b8305c2c84785a5ac700';
const spaceId = '52dq79v5sxg3';
import "isomorphic-fetch"
// https://cdn.contentful.com/spaces/52dq79v5sxg3/entries?access_token=e6bdb60d3ec5313a17274fc3db04a4fe3d28b0fbe6b0b8305c2c84785a5ac700&&content_type=customerTestimonials&fields.category=customerTestimonials`

export default class Util {
  static async fetchProduct() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=2PqfXUJwE8qSYKuM0U6w8M&fields.category=products`);
    const json = await res.json();
    return json;
  }
  static async fetchRecommendedProducts() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=2PqfXUJwE8qSYKuM0U6w8M&fields.category=recommendedProducts`);
    const json = await res.json();
    return json;
  }
  static async fetchProductById(productId) {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&sys.id=${productId}`);
    const json = await res.json();
    return json;
  }
  static async fetchUsers() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=user&fields.category=users`);
    const json = await res.json();
    return json;
  }
  static async fetchCustomerTestimonials() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=customerTestimonials&fields.category=customerTestimonials`);
    const json = await res.json();
    return json;
  }
  static async fetchTwitterFeeds() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=twitterFeeds&fields.category=twitterFeeds`);
    const json = await res.json();
    return json;
  }
  static async fetchTechnicalSpecifications() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=technicalSpecifications&fields.category=technicalSpecifications`);
    const json = await res.json();
    return json;
  }
  static async fetchCalculationsOfSavings() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=calculationsOfSavings&fields.category=calculationOfSavings`);
    const json = await res.json();
    return json;
  }
  static async fetchCalendar() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&&content_type=twitterFeeds&fields.category=twitterFeeds`);
    const json = await res.json();
    return json;
  }

  static async fetchCommerceCategories() {
    const res = await fetch(`https://dev.cxcloud.com/api/v1/categories`);
    const json = await res.json();
    return json;
  }
}



