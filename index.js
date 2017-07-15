const Thing = require('@josebarrios/thing')

class CreativeWork extends Thing{

    constructor(model){
      model = model || {};
      super(model)

      this.about = model.about;
      this.accessMode = model.accessMode;
      this.accessModeSufficient = model.accessModeSufficient;
      this.accessibilityAPI = model.accessibilityAPI;
      this.accessibilityControl = model.accessibilityControl;
      this.accessibilityFeature = model.accessibilityFeature;
      this.accessibilityHazard = model.accessibilityHazard;
      this.accessibilitySummary = model.accessibilitySummary;
      this.accountablePerson = model.accountablePerson;
      this.aggregateRating = model.aggregateRating;
      this.alternativeHeadline = model.alternativeHeadline;
      this.associatedMedia = model.associatedMedia;
      this.audience = model.audience;
      this.audio = model.audio;
      this.author = model.author;
      this.award = model.award;
      this.character = model.character;
      this.citation = model.citation;
      this.comment = model.comment;
      this.commentCount = model.commentCount;
      this.contentLocation = model.contentLocation;
      this.contentRating = model.contentRating;
      this.contributor = model.contributor;
      this.copyrightHolder = model.copyrightHolder;
      this.copyrightYear = model.copyrightYear;
      this.creator = model.creator;
      this.dateCreated = model.dateCreated;
      this.dateModified = model.dateModified;
      this.datePublished = model.datePublished;
      this.discussionURL = model.discussionURL || model.discussionUrl;
      this.editor = model.editor;
      this.educationalAlignment = model.educationalAlignment;
      this.educationalUse = model.educationalUse;
      this.encoding = model.encoding;
      this.exampleOfWork = model.exampleOfWork;
      this.fileFormat = model.fileFormat;
      this.funder = model.funder;
      this.genre = model.genre;
      this.hasPart = model.hasPart;
      this.headline = model.headline;
      this.inLanguage = model.inLanguage;
      this.interactionStatistic = model.interactionStatistic;
      this.interactivityType = model.interactivityType;
      this.isAccessibleForFree = model.isAccessibleForFree;
      this.isBasedOn = model.isBasedOn;
      this.isFamilyFriendly = model.isFamilyFriendly;
      this.isPartOf = model.isPartOf;
      this.keywords = model.keywords;
      this.learningResourceType = model.learningResourceType;
      this.license = model.license;
      this.locationCreated = model.locationCreated;
      this.mainEntity = model.mainEntity;
      this.material = model.material;
      this.mentions = model.mentions;
      this.offers = model.offers;
      this.position = model.position;
      this.producer = model.producer;
      this.provider = model.provider;
      this.publication = model.publication;
      this.publisher = model.publisher;
      this.publishingPrinciples = model.publishingPrinciples;
      this.recordedAt = model.recordedAt;
      this.releasedEvent = model.releasedEvent;
      this.review = model.review;
      this.schemaVersion = model.schemaVersion;
      this.sourceOrganization = model.sourceOrganization;
      this.spatialCoverage = model.spatialCoverage;
      this.sponsor = model.sponsor;
      this.temporalCoverage = model.temporalCoverage;
      this.text = model.text;
      this.thumbnailURL = model.thumbnailURL || model.thumbnailUrl;
      this.timeRequired = model.timeRequired;
      this.translator = model.translator;
      this.typicalAgeRange = model.typicalAgeRange;
      this.version = model.version;
      this.video = model.video;
      this.workExample = model.workExample;
    }

  get workExample() { return this.computed.workExample; }
  set workExample(value) {
    this.computed.workExample = value;
  }
}

module.exports = CreativeWork;
