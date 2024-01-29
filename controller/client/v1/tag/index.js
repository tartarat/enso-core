const tagDb = require('../../../../data-access/tagDb');
const task_tagDb = require('../../../../data-access/task_tagDb');
const tagSchema = require('../../../../validation/schema/tag');
const createValidation = require('../../../../validation')(tagSchema.createSchema);
const updateValidation = require('../../../../validation')(tagSchema.updateSchema);
const filterValidation = require('../../../../validation')(tagSchema.filterValidationSchema);
const tagController = require('./tag');

// use-cases imports with dependency injection
const addTagUsecase = require('../../../../use-case/tag/addTag')({
  tagDb,
  createValidation 
});
const findAllTagUsecase = require('../../../../use-case/tag/findAllTag')({
  tagDb,
  filterValidation
});
const getTagCountUsecase = require('../../../../use-case/tag/getTagCount')({
  tagDb,
  filterValidation
});
const getTagUsecase = require('../../../../use-case/tag/getTag')({
  tagDb,
  filterValidation
});
const updateTagUsecase = require('../../../../use-case/tag/updateTag')({
  tagDb,
  updateValidation 
});
const partialUpdateTagUsecase = require('../../../../use-case/tag/partialUpdateTag')({
  tagDb,
  updateValidation
});
const softDeleteTagUsecase = require('../../../../use-case/tag/softDeleteTag')({
  tagDb,
  task_tagDb
});
const softDeleteManyTagUsecase = require('../../../../use-case/tag/softDeleteManyTag')({
  tagDb,
  task_tagDb
});
const bulkInsertTagUsecase = require('../../../../use-case/tag/bulkInsertTag')({ tagDb });
const bulkUpdateTagUsecase = require('../../../../use-case/tag/bulkUpdateTag')({ tagDb });
const deleteTagUsecase = require('../../../../use-case/tag/deleteTag')({
  tagDb,
  task_tagDb
});
const deleteManyTagUsecase = require('../../../../use-case/tag/deleteManyTag')({
  tagDb,
  task_tagDb
});

// controller methods mapping
const addTag = tagController.addTag(addTagUsecase);
const findAllTag = tagController.findAllTag(findAllTagUsecase);
const getTagCount = tagController.getTagCount(getTagCountUsecase);
const getTagById = tagController.getTag(getTagUsecase);
const updateTag = tagController.updateTag(updateTagUsecase);
const partialUpdateTag = tagController.partialUpdateTag(partialUpdateTagUsecase);
const softDeleteTag = tagController.softDeleteTag(softDeleteTagUsecase);
const softDeleteManyTag = tagController.softDeleteManyTag(softDeleteManyTagUsecase);
const bulkInsertTag = tagController.bulkInsertTag(bulkInsertTagUsecase);
const bulkUpdateTag = tagController.bulkUpdateTag(bulkUpdateTagUsecase);
const deleteTag = tagController.deleteTag(deleteTagUsecase);
const deleteManyTag = tagController.deleteManyTag(deleteManyTagUsecase);

module.exports = {
  addTag,
  findAllTag,
  getTagCount,
  getTagById,
  updateTag,
  partialUpdateTag,
  softDeleteTag,
  softDeleteManyTag,
  bulkInsertTag,
  bulkUpdateTag,
  deleteTag,
  deleteManyTag,
};