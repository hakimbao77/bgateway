var routesDefaultFHIR = function(app, DefaultFHIR){
	//get
	app.get('/:apikey/Identifier', DefaultFHIR.get.Identifier);
	app.get('/:apikey/HumanName', DefaultFHIR.get.HumanName);
	app.get('/:apikey/ContactPoint', DefaultFHIR.get.ContactPoint);
	app.get('/:apikey/Address', DefaultFHIR.get.Address);
	app.get('/:apikey/Attachment', DefaultFHIR.get.Attachment);

	app.get('/:apikey/identity-AssuranceLevel/:_id?', DefaultFHIR.get.identityAssuranceLevel);
	app.get('/:apikey/identity-AssuranceLevel/code/:code?', DefaultFHIR.get.identityAssuranceLevelCode);
	app.get('/:apikey/administrative-gender/:_id?', DefaultFHIR.get.administrativeGender);
	app.get('/:apikey/administrative-gender/code/:code?', DefaultFHIR.get.administrativeGenderCode);
	app.get('/:apikey/marital-status/:_id?', DefaultFHIR.get.maritalStatus);
	app.get('/:apikey/marital-status/code/:code', DefaultFHIR.get.maritalStatusCode);
	app.get('/:apikey/contact-role/:_id?', DefaultFHIR.get.contactRole);
	app.get('/:apikey/contact-role/code/:code', DefaultFHIR.get.contactRoleCode);
	app.get('/:apikey/animal-species/:_id', DefaultFHIR.get.animalSpecies);
	app.get('/:apikey/animal-species/code/:code', DefaultFHIR.get.animalSpeciesCode);
	app.get('/:apikey/animal-breeds/:_id', DefaultFHIR.get.animalBreeds);
	app.get('/:apikey/animal-breeds/code/:code', DefaultFHIR.get.animalBreedsCode);
	app.get('/:apikey/animal-genderstatus/:_id', DefaultFHIR.get.animalGenderStatus);
	app.get('/:apikey/animal-genderstatus/code/:code', DefaultFHIR.get.animalGenderStatusCode);
	app.get('/:apikey/languages/:_id', DefaultFHIR.get.languages);
	app.get('/:apikey/languages/code/:code', DefaultFHIR.get.languagesCode);
	app.get('/:apikey/link-type/:_id', DefaultFHIR.get.linkType);
	app.get('/:apikey/link-type/code/:code', DefaultFHIR.get.linkTypeCode);
	app.get('/:apikey/relatedperson-relationshiptype/:_id', DefaultFHIR.get.relatedPersonRelationshipType);
	app.get('/:apikey/relatedperson-relationshiptype/code/:code', DefaultFHIR.get.relatedPersonRelationshipTypeCode);
	app.get('/:apikey/group-type/:_id', DefaultFHIR.get.groupType);
	app.get('/:apikey/group-type/code/:code', DefaultFHIR.get.groupTypeCode);
	app.get('/:apikey/identifier-use/:_id', DefaultFHIR.get.identifierUse);
	app.get('/:apikey/identifier-use/code/:code', DefaultFHIR.get.identifierUseCode);
	app.get('/:apikey/identifier-type/:_id', DefaultFHIR.get.identifierType);
	app.get('/:apikey/identifier-type/code/:code', DefaultFHIR.get.identifierTypeCode);
	app.get('/:apikey/name-use/:_id', DefaultFHIR.get.nameUse);
	app.get('/:apikey/name-use/code/:code', DefaultFHIR.get.nameUseCode);
	app.get('/:apikey/contact-point-system/:_id', DefaultFHIR.get.contactPointSystem);
	app.get('/:apikey/contact-point-system/code/:code', DefaultFHIR.get.contactPointSystemCode);
	app.get('/:apikey/contact-point-use/:_id', DefaultFHIR.get.contactPointUse);
	app.get('/:apikey/contact-point-use/code/:code', DefaultFHIR.get.contactPointUseCode);
	app.get('/:apikey/address-use/:_id', DefaultFHIR.get.addressUse);
	app.get('/:apikey/address-use/code/:code', DefaultFHIR.get.addressUseCode);
	app.get('/:apikey/address-type/:_id', DefaultFHIR.get.addressType);
	app.get('/:apikey/address-type/code/:code', DefaultFHIR.get.addressTypeCode);

	app.get('/:apikey/check-id/:id/:name', DefaultFHIR.get.checkId);
	app.get('/:apikey/check-code/:code/:name', DefaultFHIR.get.checkCode);
	app.get('/:apikey/check-uniqevalue/:fdvalue/:tbname', DefaultFHIR.get.checkUniqeValue);
	app.get('/:apikey/check-groupqouta/:group_id', DefaultFHIR.get.checkGroupQuota);
	app.get('/:apikey/check-memberentitygroup/:entity_id/:group_id', DefaultFHIR.get.checkMemberEntityGroup);

	//post
	app.post('/:apikey/identity-AssuranceLevel', DefaultFHIR.post.identityAssuranceLevel);
	app.post('/:apikey/administrative-gender', DefaultFHIR.post.administrativeGender);
	app.post('/:apikey/marital-status', DefaultFHIR.post.maritalStatus);
	app.post('/:apikey/contact-role', DefaultFHIR.post.contactRole);
	app.post('/:apikey/animal-species', DefaultFHIR.post.animalSpecies);
	app.post('/:apikey/animal-breeds', DefaultFHIR.post.animalBreeds);
	app.post('/:apikey/animal-genderstatus', DefaultFHIR.post.animalGenderStatus);
	app.post('/:apikey/languages', DefaultFHIR.post.languages);
	app.post('/:apikey/link-type', DefaultFHIR.post.linkType);
	app.post('/:apikey/relatedperson-relationshiptype', DefaultFHIR.post.relatedPersonRelationshipType);
	app.post('/:apikey/group-type', DefaultFHIR.post.groupType);
	app.post('/:apikey/identifier-use', DefaultFHIR.post.identifierUse);
	app.post('/:apikey/identifier-type', DefaultFHIR.post.identifierType);
	app.post('/:apikey/name-use', DefaultFHIR.post.nameUse);
	app.post('/:apikey/contact-point-system', DefaultFHIR.post.contactPointSystem);
	app.post('/:apikey/contact-point-use', DefaultFHIR.post.contactPointUse);
	app.post('/:apikey/address-use', DefaultFHIR.post.addressUse);
	app.post('/:apikey/address-type', DefaultFHIR.post.addressType);
	app.post('/:apikey/attachment', DefaultFHIR.post.attachment);
	app.post('/:apikey/identifier', DefaultFHIR.post.identifier);
	app.post('/:apikey/human-name', DefaultFHIR.post.humanName);
	app.post('/:apikey/contact-point', DefaultFHIR.post.contactPoint);
	app.post('/:apikey/address', DefaultFHIR.post.address);

	//put
	app.put('/:apikey/identity-AssuranceLevel/:_id', DefaultFHIR.put.identityAssuranceLevel);
	app.put('/:apikey/administrative-gender/:_id', DefaultFHIR.put.administrativeGender);
	app.put('/:apikey/marital-status/:_id', DefaultFHIR.put.maritalStatus);
	app.put('/:apikey/contact-role/:_id', DefaultFHIR.put.contactRole);
	app.put('/:apikey/animal-species/:_id', DefaultFHIR.put.animalSpecies);
	app.put('/:apikey/animal-breeds/:_id', DefaultFHIR.put.animalBreeds);
	app.put('/:apikey/animal-genderstatus/:_id', DefaultFHIR.put.animalGenderStatus);
	app.put('/:apikey/languages/:_id', DefaultFHIR.put.languages);
	app.put('/:apikey/link-type/:_id', DefaultFHIR.put.linkType);
	app.put('/:apikey/relatedperson-relationshiptype/:_id', DefaultFHIR.put.relatedPersonRelationshipType);
	app.put('/:apikey/group-type/:_id', DefaultFHIR.put.groupType);
	app.put('/:apikey/identifier-use/:_id', DefaultFHIR.put.identifierUse);
	app.put('/:apikey/identifier-type/:_id', DefaultFHIR.put.identifierType);
	app.put('/:apikey/name-use/:_id', DefaultFHIR.put.nameUse);
	app.put('/:apikey/contact-point-system/:_id', DefaultFHIR.put.contactPointSystem);
	app.put('/:apikey/contact-point-use/:_id', DefaultFHIR.put.contactPointUse);
	app.put('/:apikey/address-use/:_id', DefaultFHIR.put.addressUse);
	app.put('/:apikey/address-type/:_id', DefaultFHIR.put.addressType);
	app.put('/:apikey/attachment/:_id', DefaultFHIR.put.attachment);

}
module.exports = routesDefaultFHIR;