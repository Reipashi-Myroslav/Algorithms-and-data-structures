class RecommendationSystem {
  constructor(size = 32) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
    this.products = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];
  }

  hash(userId) {
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      hash = (hash << 5) - hash + userId.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % this.size;
  }

  addPurchase(userId, productId) {
    const index = this.hash(userId);
    const bucket = this.buckets[index];
    
    let userData = null;
    for (const user of bucket) {
      if (user.id === userId) {
        userData = user;
        break;
      }
    }
    
    if (!userData) {
      userData = {
        id: userId,
        purchases: [],
        preferences: {}
      };
      bucket.push(userData);
    }
    
    userData.purchases.push(productId);
    userData.preferences[productId] = (userData.preferences[productId] || 0) + 1;
  }

  getRecommendations(userId) {
    const index = this.hash(userId);
    const bucket = this.buckets[index];
    
    let userData = null;
    for (const user of bucket) {
      if (user.id === userId) {
        userData = user;
        break;
      }
    }
    
    if (!userData || userData.purchases.length === 0) {
      return this.getPopularProducts();
    }
    
    const notPurchased = this.products.filter(
      product => !userData.preferences[product]
    );
    
    notPurchased.sort((a, b) => {
      const aScore = this.getSimilarityScore(userData.preferences, a);
      const bScore = this.getSimilarityScore(userData.preferences, b);
      return bScore - aScore;
    });
    
    return notPurchased.slice(0, 3);
  }

  getSimilarityScore(preferences, productId) {
    let score = 0;
    for (const [purchasedProduct, count] of Object.entries(preferences)) {
      if (this.areProductsRelated(purchasedProduct, productId)) {
        score += count;
      }
    }
    return score;
  }

  areProductsRelated(product1, product2) {
    return product1[1] === product2[1];
  }

  getPopularProducts() {
    return ['p1', 'p3', 'p5'];
  }
}

const rs = new RecommendationSystem();

rs.addPurchase('user1', 'p1');
rs.addPurchase('user1', 'p3');
rs.addPurchase('user2', 'p2');
rs.addPurchase('user2', 'p4');

console.log(rs.getRecommendations('user1'));
console.log(rs.getRecommendations('user2'));
console.log(rs.getRecommendations('new_user'));