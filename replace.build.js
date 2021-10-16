var replace = require('replace-in-file');
var packageJson = require('./package.json');
const exec = require('child_process').exec;

const commitNumber = exec('git rev-list --all --count');
commitNumber.stdout.on('data', function (numb) {
  const gitCommitNumber = Number(numb);

  var versionArray = packageJson.version.toString().split('.');
  var newVersion =
    '"version": "' +
    versionArray[0] +
    '.' +
    versionArray[1] +
    '.' +
    gitCommitNumber +
    '"';

  const optionsVersion = {
    files: './package.json',
    from: /"version": "(.*)"/g,
    to: newVersion,
    allowEmptyPaths: false,
  };

  try {
    let changedFiles = replace.sync(optionsVersion);
    if (changedFiles == 0) {
      throw (
        "Please make sure that file '" + options.files + "' has \"version: ''\""
      );
    }
    console.log('Build version set: ' + newVersion);
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
});

var optsDate = {
  timeZone: 'America/Sao_Paulo',
  hour12: false,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
};
var dateString = new Date().toLocaleString('pt-br', optsDate).replace(',');

//no build do TFS na nuvem a data vem num formato diferente...
var hasSlash = dateString.indexOf('/') > 0;
dateString = dateString.replace(/\//g, '-');

var fullDate = dateString.split(' ');
var date = fullDate[0].split('-');
var day = hasSlash ? date[0] : date[2];
var month = hasSlash ? date[1] : date[1];
var year = hasSlash ? date[2].replace(/\D/g, '') : date[0];
const dateVersion =
  '"versionDate": "' + `${day}/${month}/${year}` + ' ' + fullDate[1] + '"';

const optionsDate = {
  files: './package.json',
  from: /"versionDate": "(.*)"/g,
  to: dateVersion,
  allowEmptyPaths: false,
};

try {
  let changedFiles = replace.sync(optionsDate);
  if (changedFiles == 0) {
    throw (
      "Please make sure that file '" +
      options.files +
      "' has \"versionDate: ''\""
    );
  }
  console.log('Build date version set: ' + dateVersion);
} catch (error) {
  console.error('Error occurred:', error);
  throw error;
}

function setAuthor(name) {
  var author = `"authorCommit": "${name.trim()}"`;
  try {
    const optionsAuthor = {
      files: './package.json',
      from: /"authorCommit": "(.*)"/g,
      to: author,
      allowEmptyPaths: false,
    };

    let changedFiles = replace.sync(optionsAuthor);
    if (changedFiles == 0) {
      throw (
        "Please make sure that file '" +
        optionsAuthor.files +
        "' has \"authorCommit: ''\""
      );
    }
    console.log('Build author set: ' + name);
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
}

const localBuild = exec('git config user.name');
localBuild.stdout.on('data', function (localName) {
  if (localName) {
    console.log('Build local: ' + localName);
    setAuthor(localName);
  } else {
    console.log('Build remoto, autor: ' + localName);
    const commitAuthor = exec('git log -1 --pretty=format:"%an"');
    commitAuthor.stdout.on('data', function (name) {
      setAuthor(name);
    });
  }
});
