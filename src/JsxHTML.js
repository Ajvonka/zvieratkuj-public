var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>DocaskujemZachranujem</title>
        <link rel="stylesheet" type="text/css" href="style.css" />  
        <style dangerouslySetInnerHTML={{__html: "\n\t\tth, td {\n\t\t\tpadding: 8px;\n\t\t}\n\t\t" }} />
        <div className="docaskuj-header">
          <h1>Dočasná opatera pre útulkové psy</h1>
        </div>
        <div className="container">  
          <div className="left">  
            <p>Left Page</p>  
          </div> 
          <div className="body">  
            <p>
              Pomôcť s dočasnou opaterou alebo jednoducho s dočaskou môže každý, kto má dostatok času, trochu miesta a veľké srdce.<br /> 
              V praxi to znamená – vy poskytnete psíkovi starostlivosť a miestečko vo Vašej rodine, útulok zabezpečí všetko ostatné od krmiva, cez veterinárnu starostlivosť až po adopciu.
            </p>
            <h2 style={{color: '#d1486b'}}>Naše zachránené zvieratá</h2>			
            <div>
              <table>
                <tbody><tr><th>Meno</th><th>Plemeno</th><th>Dĺžka dočasky</th></tr>
                  <tr><td>Hektor(Pickles)</td><td>X-Nemecký pinč</td><td>1 mesiac</td></tr>
                  <tr><td>Lio(Enrique)</td><td>X-Český fúzač</td><td>1 mesiac</td></tr>
                  <tr><td>Danio</td><td>X-Nemecký ovčiak</td><td>1 týždeň</td></tr>
                  <tr><td>Chinchila</td><td>X-Čivava</td><td>2 týždne</td></tr>
                  <tr><td>Pippa</td><td>X-Čivava</td><td>2 mesiace</td></tr>
                  <tr><td>Lulu</td><td>X-Čivava</td><td>2 mesiace</td></tr>
                </tbody></table><br />
            </div>
            <div>
              <table>
                <tbody><tr>
                    <th>
                      <a href="https://sk.wikipedia.org/wiki/Hovawart"> 
                        <span>Hektor</span>
                        <br /><img src="Hektor.jpeg" height={300} width={500} />
                      </a>
                    </th>					
                    <th>
                      <a href="https://cs.wikipedia.org/wiki/Papillon"> 
                        <span>Lio</span>
                        <br /><img src="Lio.jpg" height={300} width={420} />
                      </a>
                    </th>	
                  </tr>	
                  <tr>
                    <th>
                      <a href="https://sk.wikipedia.org/wiki/Hovawart"> 
                        <span>Danio</span>
                        <br /><img src="Danio.jpeg" height={300} width={500} />
                      </a>
                    </th>					
                    <th>
                      <a href="https://cs.wikipedia.org/wiki/Papillon"> 
                        <span>Chinchila</span>
                        <br /><img src="Chinchila.jpg" height={300} width={420} />
                      </a>
                    </th>	
                  </tr>
                  <tr>
                    <th>
                      <a href="https://sk.wikipedia.org/wiki/Hovawart"> 
                        <span>Pippa</span>
                        <br /><img src="Pippa.jpeg" height={300} width={500} />
                      </a>
                    </th>					
                    <th>
                      <a href="https://cs.wikipedia.org/wiki/Papillon"> 
                        <span>Lulu</span>
                        <br /><img src="Lulu.jpg" height={300} width={420} />
                      </a>
                    </th>	
                  </tr>					
                </tbody></table>
            </div>
          </div>
          <div className="right">  
            <p>Right Page</p>  
          </div>  
        </div> 
        <div className="footer">  
          <p>Footer</p>  
        </div>   			
      </div>
    );
  }
});