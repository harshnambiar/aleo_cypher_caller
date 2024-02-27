const programId = "cypher_nm01.aleo";
const mappingName = "codes";
const mappingKey = "10u64";

// Here we fecth the value of the mapping
const getMappingEndpointUrl = (programID, mappingName, mappingKey) => (
    `${apiBaseUrl}/program/${programID}/mapping/${mappingName}/${mappingKey}`
  );
  
const getMappingValue = async (programID, mappingName, mappingKey) => {
    const response = await fetch(
      getMappingEndpointUrl(programID, mappingName, mappingKey)
    );
    return response.json();
  };

const mappingValue = await getMappingValue(programId, mappingName, mappingKey);

console.log(mappingValue);