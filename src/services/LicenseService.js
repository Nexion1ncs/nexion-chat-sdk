class LicenseService {
  async validateLicense(apiKey) {
    return {
      plan: 'starter',
      features: ['basic_chat', 'encryption'],
      is_active: true
    };
  }
}

module.exports = new LicenseService();