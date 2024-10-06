import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Brackets.css';

// Team Input Component
const TeamInput = ({ teamName }) => {
    return (
        <div className="team-input">
            <div className="team-logo-container">
                <img src="https://via.placeholder.com/50" alt="team logo" />
            </div>
            <input type="text" defaultValue={teamName} />
        </div>
    );
};

// BracketRound Component
const BracketRound = ({ title, team1, team2 }) => {
    return (
        // <div className="bracket-round">
        <div className={`bracket-round`}>
            <div className="round-title">{title}</div>
            <TeamInput teamName={team1} />
            <TeamInput teamName={team2} />
        </div>
    );
};

// Main Bracket Component
const Bracket = () => {
    const [bracketType, setBracketType] = useState('dbl-elim');

    return (
        <div>


            {bracketType === 'single-elim' ? (
                <div className="bracket">
                    {/* Quarterfinals Column */}
                    <div className="bracket-column">
                        <BracketRound title="Quarterfinal 1" team1="TBA" team2="TBA" />
                        <BracketRound title="Quarterfinal 2" team1="TBA" team2="TBA" />
                        <BracketRound title="Quarterfinal 3" team1="TBA" team2="TBA" />
                        <BracketRound title="Quarterfinal 4" team1="TBA" team2="TBA" />
                    </div>

                    {/* Semifinals Column */}
                    <div className="bracket-column">
                        <BracketRound title="Semifinal 1" team1="TBA" team2="TBA" />
                        <BracketRound title="Semifinal 2" team1="TBA" team2="TBA" />
                    </div>

                    {/* Grand Final Column */}
                    <div className="bracket-column">
                        <BracketRound title="Grand Final" team1="TBA" team2="TBA" />
                    </div>
                </div>
            ) : (
                // <div className="bracket-dbl-elim"> // need to decide if we really care about the look/formatting of things in the actual dash.. endgame sure.. but now??
                <div className={`bracket`}>
                    {/* Group A Column */}
                    <div className="bracket-column">
                        <BracketRound title="SemiFinal 1" team1="TBA" team2="TBA" />
                        <BracketRound title="SemiFinal 2" team1="TBA" team2="TBA" />
                        <BracketRound title="Loser's SemiFinal" team1="TBA" team2="TBA" />
                    </div>

                    {/* Group B Column */}
                    <div className="bracket-column">
                        <BracketRound title="Winners' Final" team1="TBA" team2="TBA" />
                        <BracketRound title="Loser's Final" team1="TBA" team2="TBA" />
                    </div>

                    {/* Group C Column */}
                    <div className="bracket-column">
                        <BracketRound title="Grand Final" team1="TBA" team2="TBA" />
                    </div>


                </div>
            )}

            <div className="bracket-footer">
                <Button
                    // variant="primary"
                    variant={bracketType === 'single-elim' ? 'primary' : 'secondary'}
                    active={bracketType === 'single-elim'}
                    onClick={() => setBracketType('single-elim')}
                    className="mr-2"
                >
                    Single Elimination
                </Button>
                <Button
                    variant={bracketType === 'dbl-elim' ? 'primary' : 'secondary'}
                    active={bracketType === 'dbl-elim'}
                    onClick={() => setBracketType('dbl-elim')}
                >
                    Double Elimination
                </Button>
            </div>
        </div>
    );
};

export default Bracket;