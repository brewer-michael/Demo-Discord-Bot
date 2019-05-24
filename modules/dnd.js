

postgres.Pool.connect( (err, client, done) => {
        if(err) {
          console.log(err)
        }else {
        console.log('Connected to database');
        client.query('create table if not exists dndchars( \
            id text primary key, \
            name text, \
            race text, \
            type text, \
            level integer default 1, \
            proficiency integer default 0, \
            strength integer default 0, \
            dexterity integer default 0, \
            constitution integer default 0, \
            wisdom integer default 0, \
            charisma integer default 0, \
            hp integer default 0, \
            initiative integer default 0, \
            armor integer default 0, \
            speed integer default 0, \
            skills text, \
            p_l text, \
            senses text, \
            defenses text, \
            conditions text, \
            actions text, \
            equipment text, \
            features text, \
            creatures text, \
             default 0)', (err, result) => {
                //disconnent from database on error
                done();
                if (err) {
                        throw err;
                }
              });
            }
      });

function insertData(receivedMessage){
      let fullCommand = receivedMessage.content //optional add .substr(1) to remove leading !
      let splitCommand = fullCommand.split(" ") // SPlit the message on space
      let primaryCommand = splitCommand[0] // first word is the command
      let arguments = splitCommand.slice(1) // all other words are arguments
      console.log("Command received: " + primaryCommand)
      console.log("Arguments: " + arguments)
      return true
}
