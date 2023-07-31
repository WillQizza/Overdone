export default function hasPayload(data: any, propertyDefinitions: any) {
  for (const propertyName in propertyDefinitions) {
    if (!(propertyName in data)) {
      return false;
    }

    const propertyType = propertyDefinitions[propertyName];

    if (typeof data[propertyName] !== propertyType) {
      return false;
    }

    if (propertyType === "object") {
      const childPayloadExists = hasPayload(data[propertyName], propertyDefinitions[propertyName]);
      if (!childPayloadExists) {
        return false;
      }

    }

  }

  return true;
}