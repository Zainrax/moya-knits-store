"use strict";

const slugify = require("slugify");
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.tag && !data.slug) {
        const tag = await strapi.services.tag.findOne({ id: data.tag });
        data.slug = tag.slug;
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.tag && !data.slug) {
        const tag = await strapi.services.tag.findOne({ id: data.tag });
        data.slug = tag.slug;
      }
    },
  },
};
